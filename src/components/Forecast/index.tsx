import classNames from 'classnames';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { weatherApi } from '../../service/weather';
import { Forecast as ForecastType } from '../../service/weather/type';
import { citySelector } from '../../store/reducer/citySlice';

export const Forecast = () => {
    const { city } = useSelector(citySelector);

    const { data = {} as ForecastType, isLoading, isError, isSuccess } = weatherApi.useGetWeatherForecastQuery({ query: city }, {
        skip: !city
    });

    const itemJSX = data?.forecast?.forecastday.map((el: any) => {
        return <div key={el?.date}>
            <p>{el?.date}</p>

            <div className=''>
                <img src={el?.day?.condition?.icon} alt={el?.day?.condition?.text} />
                <div>
                    <p>{el?.day?.mintemp_c}</p>
                    <span>*C</span>
                </div>
                <div>
                    <p>{el?.day?.maxtemp_c}</p>
                    <span>*C</span>
                </div>
            </div>
        </div>;
    });
    return <>
        {isError && <p className={classNames('fs-5')}>Something went wrong</p>}
        {isLoading && <Spinner />}
        {isSuccess && itemJSX}
    </>;
};