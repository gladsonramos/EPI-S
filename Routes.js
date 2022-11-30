import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Pages/home';
import Trabalhador from './Pages/trabalhador';
import CadastroTrab from './Pages/cadastrotrab';
import EPI from './Pages/EPI';
import CadastroEPI from './Pages/cadastroEPI';
const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Home" component={Home}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="Trabalhador" component={Trabalhador}
                options={{ headerShown: false }}

            />

            <Stack.Screen
                name="CadastroTrab" component={CadastroTrab}
                options={{ headerShown: false }}

            />


            <Stack.Screen
                name="EPI" component={EPI}
                options={{ headerShown: false }}

            />

            <Stack.Screen
                name="CadastroEPI" component={CadastroEPI}
                options={{ headerShown: false }}

            />

        </Stack.Navigator>
    )
}
