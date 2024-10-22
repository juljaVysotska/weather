import classNames from 'classnames';
import { format } from 'date-fns';
import { useUserData } from '../../hooks/useUserData';
import { weatherApi } from '../../service/weather';
import { CurrentWeather } from '../../service/weather/type';

export const MainWeatherInfo = () => {
    const { query } = useUserData();

    const {
        data = {} as CurrentWeather,
        isLoading,
        isError,
        isSuccess,
    } = weatherApi.useGetCurrentWeatherQuery(
        { query: query },
        {
            skip: !query
        },
    );

    if (isError) return <></>;

    return (
        <>
            {isError && <p className={classNames('text-zinc-700')}>Something went wrong</p>}
            {isLoading && <div className='spinner' />}
            {isSuccess && (
                <div className='flex flex-wrap justify-center md:justify-between  gap-2'>
                    <div className='w-full text-center md:w-8/12 md:text-left'>
                        <p className='text-zinc-700 text-5xl font-bold'>{data?.location?.name}</p>
                        <p className='text-zinc-400'>
                            {format(new Date(data?.location?.localtime), 'HH:mm - EEEE, d MMMM yyyy')}
                        </p>

                        <p className='text-zinc-400'>
                            Humidity: <span className='text-red-400'>{data?.current?.humidity} %</span>, Wind:{' '}
                            <span className='text-red-400'>{data?.current?.wind_kph} km/h</span>
                        </p>
                    </div>
                    <div className='w-full md:w-3/12'>
                        <div className='flex justify-center md:justify-end items-center'>
                            <img
                                className='size-24'
                                src={data?.current?.condition?.icon}
                                alt={data?.current?.condition?.text}
                            />
                            <div className='flex gap-x-0.5 font-semibold'>
                                <p className='text-zinc-700 text-7xl'>{data?.current?.temp_c} </p>
                                <span className='text-zinc-700 text-2xl '>°C</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
