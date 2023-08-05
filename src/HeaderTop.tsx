import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import logo from './logo.png'
const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    backgroundColor:'transparent  !important',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(56),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: 'white',
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));
 

export function HeaderMiddle() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
const links= [
    {
      "link": "/",
      "label": "Home"
    },
    {
      "link": "/twitter",
      "label": "Twitter"
    }, 
  ]
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return ( 
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
        <Group className={classes.links} spacing={25}>
        <a
      key={'home'}
      href={'/home'}
      className={cx(classes.link, { [classes.linkActive]: active === '/home' })}
      onClick={(event) => {
        event.preventDefault();
        setActive('/home');
      }}
    >
      Home
    </a>
    <a
      key={'Telegram'}
      href={'/Telegram'}
      className={cx(classes.link, { [classes.linkActive]: active === '/Telegram' })}
      onClick={(event) => {
        event.preventDefault();
        setActive('/Telegram');
      }}
    >
      Telegram
    </a>
        </Group>
 
        <img src={logo} height={'20em'} style={{marginTop:'8px'}}/>
        <Group spacing={20} className={classes.links}   position="right" >
        <a
      key={'Twitter'}
      href={'/Twitter'}
      className={cx(classes.link, { [classes.linkActive]: active === '/Twitter' })}
      onClick={(event) => {
        event.preventDefault();
        setActive('/Twitter');
      }}
    >
      Twitter
    </a>
    <a
      key={'bot'}
      href={'/bot'}
      className={cx(classes.link, { [classes.linkActive]: active === '/bot' })}
      onClick={(event) => {
        event.preventDefault();
        setActive('/bot');
      }}
    >
      Access Bot
    </a>
        </Group>
      </Container> 
  );
}