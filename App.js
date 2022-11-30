import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './Routes';


export default function App() {
  return (
<<<<<<< HEAD

    <NavigationContainer>
      <Routes />
    </NavigationContainer>

    

  );
}

=======
    <View style={styles.container}>
      <Text style={styles.texto}>Alguma coisa</Text>
      <Text>Alguma coisa</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#fff'

  }

});
>>>>>>> b125399161f99618aafd26cc9caa7cf4145630ed
