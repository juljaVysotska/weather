import { useSelector } from 'react-redux';
import { citySelector } from '../store/reducer/citySlice';
import { locationSelector } from '../store/reducer/locationSlice';

export const useUserData = () => {

    const { city } = useSelector(citySelector);
    const { location } = useSelector(locationSelector);

    const query = city || location;

    if (typeof query === 'string') return { query: city };
    if (Array.isArray(location)) return { query: location.join(',') };

    return { query: null };
};