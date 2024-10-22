import { format } from 'date-fns';
import { useUserData } from '../../hooks/useUserData';
import { weatherApi } from '../../service/weather';
import { Forecast as ForecastType } from '../../service/weather/type';

export const Forecast = () => {
    const { query } = useUserData();

    const {
        data = {} as ForecastType,
        isLoading,
        isError,
        isSuccess,
    } = weatherApi.useGetWeatherForecastQuery(
        { query: query },
        {
            skip: !query,
        },
    );

    if (isError) return <></>;

    const itemJSX = data?.forecast?.forecastday.map((el: any) => {
        return (
            <div
                className='grid justify-center gap-1 grow min-w-40 p-1.5 rounded-lg bg-white border-solid border-2 border-sky-100'
                key={el?.date}
            >
                <p className='text-center text-zinc-400'>{format(new Date(el?.date), 'EEEE, MMM d')}</p>

                <img className='m-auto size-16' src={el?.day?.condition?.icon} alt={el?.day?.condition?.text} />
                <div className='flex gap-1.5 justify-center'>
                    <p className='text-gray-500 font-medium'>{el?.day?.mintemp_c}°C</p>
                    <p className='text-gray-950 font-medium'>{el?.day?.maxtemp_c}°C</p>
                </div>
            </div>
        );
    });

    return (
        <>
            {isLoading && <div className='spinner' />}
            <div className='flex flex-wrap gap-2'>{isSuccess && itemJSX}</div>
        </>
    );
};
