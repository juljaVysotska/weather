import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addCity } from '../../store/reducer/citySlice';

export const SearchForm = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');

    return <>
        <Form onSubmit={(e) => {
            e.preventDefault();
            dispatch(addCity({
                city: value
            }));
        }}>
            <Row>
                <Col md={9}>
                    <Form.Control type='text' placeholder='Enter a city...' value={value} onChange={(value) => {
                        setValue(value.target.value);
                    }} />
                </Col>
                <Col md={3}>
                    <Button type='submit'>Search</Button>
                </Col>
            </Row>
        </Form>
    </>;
};