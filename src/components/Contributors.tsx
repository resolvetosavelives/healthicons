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
    link: 'https://twitter.com/hypertextmike',
    avatar: 'https://unavatar.io/twitter/hypertextmike'
  },
  {
    name: 'Nick Burka',
    link: 'https://twitter.com/nickburka',
    avatar: 'https://unavatar.io/twitter/nickburka'
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
    link: 'https://twitter.com/sgarrity',
    avatar: 'https://unavatar.io/twitter/sgarrity'
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
          <a href={contributor.link}>
            <img
              src={contributor.avatar}
              alt={`Avatar of ${contributor.name}`}
              className={styles.contributorAvatarImage}
            />
            {contributor.name}
          </a>
        </div>
      ))}
    </>
  );
}
