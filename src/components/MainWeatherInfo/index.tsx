import classNames from 'classnames';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { weatherApi } from '../../service/weather';
import { CurrentWeather } from '../../service/weather/type';
import { citySelector } from '../../store/reducer/citySlice';

export const MainWeatherInfo = () => {
    const { city } = useSelector(citySelector);

    const { data = {} as CurrentWeather, isLoading, isError, isSuccess } = weatherApi.useGetCurrentWeatherQuery({ query: city }, {
        skip: !city
    });

    return <>
        {isError && <p className={classNames('fs-5')}>Something went wrong</p>}
        {isLoading && <Spinner />}
        {isSuccess && <Row>
            <Col md={9}>
                <p className={classNames('fs-5')}>{data?.location?.name}, time {data?.location?.localtime?.split(' ')[1]}</p>
                <p className={classNames('fs-5')}>Humidity: {data?.current?.humidity}</p>
                <p className={classNames('fs-5')}>Wind: {data?.current?.wind_kph} km/h</p>
            </Col>
            <Col md={3}>
                <div className=''>
                    <img src={data?.current?.condition?.icon} alt={data?.current?.condition?.text} />
                    <div>
                        <p>{data?.current?.temp_c}</p>
                        <span>*C</span>
                    </div>
                </div>

            </Col>
        </Row>}
    </>;
};