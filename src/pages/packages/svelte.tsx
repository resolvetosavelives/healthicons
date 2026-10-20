import { PackagePage } from '../../components/PackagePage';
import { PACKAGES } from '../../lib/packages';

export default function SveltePackage() {
  return <PackagePage info={PACKAGES.find((info) => info.slug === 'svelte')} />;
}
