import styles from './Contributors.module.scss';

const contributors = [
  {
    name: 'Agrata Patel',
    link: 'https://twitter.com/b0urnvita',
    avatar: 'https://unavatar.io/twitter/b0urnvita'
  },
  {
    name: 'Andy Ngo',
    link: 'https://twitter.com/andyngo',
    avatar: 'https://unavatar.io/twitter/andyngo'
  },
  {
    name: 'Bryn Jackson',
    link: 'https://twitter.com/@superbryntendo',
    avatar: 'https://unavatar.io/twitter/superbryntendo'
  },
  {
    name: 'Clara Campos',
    link: 'https://github.com/clara-campos',
    avatar: 'https://unavatar.io/github/clara-campos'
  },
  {
    name: 'Daniel Burka',
    link: 'https://twitter.com/dburka',
    avatar: 'https://unavatar.io/twitter/dburka'
  },
  {
    name: 'Gershon Paul',
    link: 'https://www.linkedin.com/in/gershonpaul',
    avatar: 'https://unavatar.io/twitter/gerrrsh'
  },
  {
    name: 'Gregory Schmidt',
    link: 'https://twitter.com/_GregSchmidt',
    avatar: 'https://unavatar.io/twitter/_GregSchmidt'
  },
  {
    name: 'Julia Parchimowicz',
    link: 'https://twitter.com/its_badjuju',
    avatar: 'https://unavatar.io/twitter/its_badjuju'
  },
  {
    name: 'Jemis Mali',
    link: 'https://twitter.com/jemismali',
    avatar: 'https://unavatar.io/twitter/jemismali'
  },
  {
    name: 'Jordan Stephensen',
    link: 'https://twitter.com/jwstephensen',
    avatar: 'https://unavatar.io/twitter/jwstephensen'
  },
  {
    name: 'Kirill Golubev',
    link: 'https://github.com/ArGeoph',
    avatar: 'https://unavatar.io/github/ArGeoph'
  },
  {
    name: 'Lina Wang',
    link: 'https://twitter.com/linafab',
    avatar: 'https://unavatar.io/twitter/linafab'
  },
  {
    name: 'Mario Rocchi',
    link: 'https://twitter.com/mario_rocchi',
    avatar: 'https://unavatar.io/twitter/mario_rocchi'
  },
  {
    name: 'Mayank Dhawan',
    link: 'https://twitter.com/mayankd_',
    avatar: 'https://unavatar.io/twitter/mayankd_'
  },
  {
    name: 'Megha Chandrashekar',
    link: 'https://twitter.com/meghacshekhar',
    avatar: 'https://unavatar.io/twitter/meghacshekhar'
  },
  {
    name: 'Michael Gauthier',
    link: 'https://github.com/gauthierm',
    avatar: 'https://unavatar.io/github/gauthierm'
  },
  {
    name: 'Nick Burka',
    link: 'https://bsky.app/profile/nickburka.bsky.social',
    avatar: 'https://unavatar.io/github/nburka'
  },
  {
    name: 'Parth Kapadia',
    link: 'https://twitter.com/parthk',
    avatar: 'https://unavatar.io/twitter/parthk'
  },
  {
    name: 'Rama Krushna',
    link: 'https://twitter.com/rkdotdesign',
    avatar: 'https://unavatar.io/twitter/rkdotdesign'
  },
  {
    name: 'Ranit Das',
    link: 'https://twitter.com/dasranit12',
    avatar: 'https://unavatar.io/twitter/dasranit12'
  },
  {
    name: 'Rohan Pal',
    link: 'https://twitter.com/rohanpaldesign',
    avatar: 'https://unavatar.io/twitter/rohanpaldesign'
  },
  {
    name: 'Steven Garrity',
    link: 'https://github.com/sgarrity',
    avatar: 'https://unavatar.io/github/sgarrity'
  },
  {
    name: 'Yugandhar Bhamare',
    link: 'https://twitter.com/yug_design',
    avatar: 'https://unavatar.io/twitter/yug_design'
  },
  {
    name: 'Komal Khandelwal',
    link: 'https://twitter.com/k4komaaaal',
    avatar: 'https://unavatar.io/twitter/k4komaaaal'
  },
  {
    name: 'Hetal Rathi',
    link: 'https://twitter.com/_hetalrathi',
    avatar: 'https://unavatar.io/twitter/_hetalrathi'
  },
  {
    name: 'Tekeste Kidanu',
    link: 'https://twitter.com/tkmadeit',
    avatar: 'https://unavatar.io/twitter/tkmadeit'
  },
  {
    name: 'Yoshitha Krishna V',
    //link: 'https://twitter.com/yoshithakrishna',
    avatar: 'https://unavatar.io/twitter/needs-an-account-' // TODO
  },
  {
    name: 'Jahanvi Singh',
    link: 'https://twitter.com/me_Jahanvi',
    avatar: 'https://unavatar.io/twitter/me_Jahanvi'
  },
  {
    name: 'Swetha Ramaswamy',
    //link: 'https://twitter.com/swetharamaswamy',
    avatar: 'https://unavatar.io/twitter/needs-an-account-' // TODO
  },
  {
    name: 'Hazly Mohammed',
    //link: 'https://twitter.com/??',
    avatar: 'https://unavatar.io/twitter/needs-an-account-' // TODO
  },
  {
    name: 'Samanvitha AN',
    link: 'https://twitter.com/ASamanvitha',
    avatar: 'https://unavatar.io/twitter/ASamanvitha'
  },
  {
    name: 'Naveen Sangu',
    link: 'https://www.linkedin.com/in/naveen-sangu-30250596/',
    avatar: 'https://unavatar.io/twitter/needs-an-account-' // TODO
  },
  {
    name: 'Linda Ojo Taiwo',
    link: 'https://www.lindaojo.com',
    avatar: 'https://unavatar.io/twitter/LindaOjo_'
  }
];

// make sure they're alphabetical
contributors.sort((c1, c2) => {
  return c1.name.toLowerCase() > c2.name.toLowerCase() ? 1 : -1;
});

export function Contributors() {
  return (
    <>
      <h2 id={styles.contributors}>Volunteer contributors</h2>
      {contributors.map((contributor, index) => (
        <div key={index} className={styles.contributorItem}>
          {contributor.link ? (
            <a href={contributor.link}>
              <img
                src={contributor.avatar}
                alt={`Avatar of ${contributor.name}`}
                className={styles.contributorAvatarImage}
              />
              {contributor.name}
            </a>
          ) : (
            <>
              <img
                src={contributor.avatar}
                alt={`Avatar of ${contributor.name}`}
                className={styles.contributorAvatarImage}
              />
              {contributor.name}
            </>
          )}
        </div>
      ))}
    </>
  );
}
