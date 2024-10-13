import classNames from 'classnames';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { weatherApi } from '../../service/weather';
import { CurrentWeather } from '../../service/weather/type';
import { citySelector } from '../../store/reducer/citySlice';

export const MainWeatherInfo = () => {
    const { city } = useSelector(citySelector);

    const { data = {} as CurrentWeather, isLoading, isError, isSuccess } = weatherApi.useGetCurrentWeatherQuery({ query: city }, {
        skip: !city
    });

    if (isError) return <></>;

    return <>
        {isError && <p className={classNames('text-zinc-700')}>Something went wrong</p>}
        {isLoading && <div className='spinner' />}
        {isSuccess && <div className='flex gap-2'>
            <div className={'w-9/12'}>
                <p className='text-zinc-700 text-5xl font-bold'>{data?.location?.name}</p>
                <p className='text-zinc-400'>{format(new Date(data?.location?.localtime), "HH:mm - EEEE, d MMMM yyyy")}</p>

                <p className='text-zinc-400'>
                    Humidity: <span className='text-red-400'>{data?.current?.humidity} %</span>,
                    Wind: <span className='text-red-400'>{data?.current?.wind_kph} km/h</span>
                </p>
            </div>
            <div className={'w-3/12'}>
                <div className='flex justify-end items-center'>
                    <img className='size-24' src={data?.current?.condition?.icon} alt={data?.current?.condition?.text} />
                    <div className='flex gap-x-0.5 font-semibold'>
                        <p className='text-zinc-700 text-7xl'>{data?.current?.temp_c} </p>
                        <span className='text-zinc-700 text-2xl '>°C</span>
                    </div>
                </div>

            </div>
        </div>}
    </>;
};