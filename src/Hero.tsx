import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
   
    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Exo`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors.pink[6],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export function Hero() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}> 
      <div className={classes.inner}>
        <Title className={classes.title}>
          Generate Wallets with your{' '}
          <Text component="span" inherit className={classes.highlight}>
            Fancy Choice
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Highly Secure, unique wallets that represent your birthday,anniversary,passwords,keys or even reminders.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button  variant="gradient" gradient={{ from: 'pink', to: 'red' }}  size="md" mr={10} w={150}>
            TeleGram Bot
          </Button>
          <Button  variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} size="md" w={150}>
            Find More
          </Button>
        </div>
      </div>
    </div>
  );
}