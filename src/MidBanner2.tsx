import { createStyles, Text, Title, TextInput, Button, Image, rem } from '@mantine/core';
import logo from './assets/image1@2x.png'


const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop:'30px',
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

export function MidBanner2() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Image src={logo} className={classes.image} />
      <div className={classes.body}>
        <Title className={classes.title}>ONLY 1000 $FWT
FOR GENERATION</Title>
        <Text fw={500} fz="lg" mb={5}>
        MINIMAL HOLDINGS
        </Text>
        <Text fz="sm" >
        Just Hold 1000  $FWT tokens in wallet to generate any type
of wallet 
        </Text>

      </div>
      
     </div>
  );
}