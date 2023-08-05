import { createStyles, Text, Title, TextInput, Button, Image, rem } from '@mantine/core';
import logo from './assets/image@2x.png'


const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor: '#FFFFFF0A',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function MidBanner() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>REALTIME GENERATION OF
WALLET ADDRESSES</Title>
        <Text fw={500} fz="lg" mb={5}>
        HIGHLY SECURE ALGORITHM
        </Text>
        <Text fz="sm" >
        Our bot generates realtime wallet addresses and does not 
store any wallet details, or track the wallets ever.
Completely implementing AES-256 Encryption Algorithm for
generation of highly secure wallets
        </Text>

      </div>
      <Image src={logo} className={classes.image} />
     </div>
  );
}