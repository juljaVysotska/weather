import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCity } from '../../store/reducer/citySlice';

export const SearchForm = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');

    return (
        <>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!value) return;

                    dispatch(
                        addCity({
                            city: value,
                        }),
                    );
                }}
            >
                <div className='flex gap-2'>
                    <input
                        className='grow text-base border-solid border-2 rounded-lg border-sky-100 p-1'
                        type='text'
                        placeholder='Enter a city...'
                        value={value}
                        onChange={value => {
                            setValue(value.target.value);
                        }}
                    />
                    <button
                        className='w-20 md:w-40 text-white rounded-lg bg-sky-500 hover:bg-sky-600 duration-300'
                        type='submit'
                    >
                        Search
                    </button>
                </div>
            </form>
        </>
    );
};
