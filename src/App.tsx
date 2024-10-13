import { Container } from 'react-bootstrap';
import { Forecast } from './components/Forecast';
import { MainWeatherInfo } from './components/MainWeatherInfo';
import { SearchForm } from './components/SearchForm';

export const App = () => {

    return <Container>
        <SearchForm />
        <MainWeatherInfo />
        <Forecast />
    </Container>;
};