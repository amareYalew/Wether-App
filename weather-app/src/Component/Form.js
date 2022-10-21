import react, { useState } from 'react';

function Form({ setCity,weatherData }) {
    const [form, setForm] = useState({
        city: "",
        country: ""
    })

    const changeHandler = (e) => {


        let name = e.target.name;
        let value = e.target.value;

        if (name == "city") {
            setForm({ ...form, city: value });
        }
        if (name == "country") {
            setForm({ ...form, country: value });
        }

    }
    const clickHandler = (event) => {
        event.preventDefault();
        console.log(form)

        setCity(form)
        weatherData(event)
    
    }
    return (
        <div className="weather">
        <span className="title">Weather App</span>
        <br />
        <form >
            <input
                name="city"
                type="text"
                placeholder='city'
                value={form.city}
                onChange={changeHandler}
            />
            &nbsp; &nbsp; &nbsp;&nbsp;
            <input
                name="country"
                type="text"
                placeholder='Country'
                value={form.country}
                onChange={changeHandler}
            />

            <button type="submit" className="getweather" onClick={clickHandler}>Submit</button>
        </form>
        </div>
    )


}
export default Form;
