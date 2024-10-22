import { Forecast, MainWeatherInfo, SearchForm } from './components';

export const App = () => {
    return (
        <div className='max-w-screen-lg mx-2 my-4 lg:mx-auto lg:my-14 p-4 rounded-lg bg-white border-solid border-2 border-sky-100 grid gap-3'>
            <SearchForm />
            <hr className='border-sky-100 h-0.5' />
            <MainWeatherInfo />
            <Forecast />
        </div>
    );
};
