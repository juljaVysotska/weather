import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCoordinates } from '../store/reducer/locationSlice';

export const useLocation = () => {
    const dispatch = useDispatch();
    const [userLocation, setUserLocation] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;

                    setUserLocation({ latitude, longitude });
                    dispatch(addCoordinates({ location: [latitude, longitude] }));
                },

                error => {
                    // eslint-disable-next-line
                    console.error('Error get user location: ', error);
                },
            );
        } else {
            // eslint-disable-next-line
            console.error('Geolocation is not supported by this browser');
        }
    };

    return {
        getUserLocation,
        coordinates: [userLocation?.latitude, userLocation?.longitude || null],
    };
};
