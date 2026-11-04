/* eslint-disable @typescript-eslint/naming-convention -- PostHog's settings
   are snake_case, and so are event properties by its convention */
// the slim build: just event capture, without the session recording,
// surveys, feature flags and other extensions this doesn't use (less than
// half the size)
import posthog from 'posthog-js/dist/module.slim';
import Router from 'next/router';
import { Icon } from './icons';

// Visitor numbers and which icons people use, through PostHog, without
// cookies: nothing is stored in the visitor's browser, and PostHog counts
// unique visitors with a privacy-preserving hash on its servers. Only
// switched on when the site is built with a PostHog project key (see
// .github/workflows/deploy.js.yml), so local builds don't send anything.

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

let started = false;

export function startAnalytics() {
  if (!KEY || started || typeof window === 'undefined') {
    return;
  }
  started = true;
  posthog.init(KEY, {
    api_host: HOST,
    // no cookies or browser storage (cookieless mode must also be switched
    // on in the PostHog project's settings, or these events are dropped)
    cookieless_mode: 'always',
    respect_dnt: true,
    // page views are sent below; just those, the events in this file and
    // when people leave a page: no click tracking, session recordings,
    // surveys, feature flags or scripts loaded from PostHog
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: false,
    disable_session_recording: true,
    disable_surveys: true,
    disable_web_experiments: true,
    advanced_disable_flags: true,
    disable_external_dependency_loading: true
  });

  // a page view for the first page and for each page after it, including an
  // icon's popup (it has its own address); changing the filters or search
  // only changes the query, which isn't a new page
  let lastPath = '';
  const pageView = () => {
    if (window.location.pathname !== lastPath) {
      lastPath = window.location.pathname;
      posthog.capture('$pageview');
    }
  };
  pageView();
  Router.events.on('routeChangeComplete', pageView);
}

export type IconEvent = 'icon_viewed' | 'icon_downloaded' | 'icon_copied';

// an event about one icon, with its name and style, so the most popular
// icons can be counted in PostHog by `icon`
export function trackIcon(
  event: IconEvent,
  icon: Icon,
  style: string,
  details: Record<string, string | number | boolean> = {}
) {
  track(event, {
    icon: `${icon.category}/${icon.id}`,
    icon_title: icon.title,
    category: icon.category,
    style,
    ...details
  });
}

export function track(
  event: string,
  properties?: Record<string, string | number | boolean>
) {
  if (started) {
    posthog.capture(event, properties);
  }
}
