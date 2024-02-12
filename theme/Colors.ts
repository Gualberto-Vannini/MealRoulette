export declare type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    tint: string;
    tabIconDefault: string;
    tabIconSelected: string;
    notification: string;
    title: string;
  };
};

// here you can change the colors according to the design
export const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#fff',
    background: '#fff',
    card:'#fff',
    text: '#000',
    border:'#fff',
    tint: '#000',
    tabIconDefault: '#ccc',
    tabIconSelected: '#000',
    notification: '',
    title: '#000',
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#000',
    background: '#000',
    card:'#000',
    text: '#ccc',
    border:'#000',
    tint: '#ccc',
    tabIconDefault: '#ccc',
    tabIconSelected: '#fff',
    notification: '#fff',
    title: '#61dafb',
  },
};
