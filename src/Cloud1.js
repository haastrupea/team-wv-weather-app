import './Cloud1.css';


export default function Cloud1() {
    return (
        <div className="weather-app">
            <header className="App-header">
                <div>icons</div>
                <h1>Redemption City</h1>
                <div className="weather-icon">
                    <img src="/path/to/cloud-rain-icon.png" alt="Weather Icon" />
                </div>
                <div className="weather-temp">
                    <h2>18°</h2>
                    <p>Heavy showers and light winds</p>
                </div>
            </header>

            <section className="weather-forecast">
                <div className="hourly-forecast">
                    <h3>24-hour forecast</h3>
                    <div className="forecast-row">
                        <div className="forecast-item">
                            <p>Now</p>
                            <p>18°</p>
                        </div>
                        <div className="forecast-item">
                            <p>12:00</p>
                            <p>18°</p>
                        </div>
                        <div className="forecast-item">
                            <p>13:00</p>
                            <p>18°</p>
                        </div>
                        <div className="forecast-item">
                            <p>14:00</p>
                            <p>18°</p>
                        </div>
                        <div className="forecast-item">
                            <p>15:00</p>
                            <p>18°</p>
                        </div>
                        <div className="forecast-item">
                            <p>16:00</p>
                            <p>18°</p>
                        </div>
                        <div className="forecast-item">
                            <p>17:00</p>
                            <p>18°</p>
                        </div>
                        <div className="forecast-item">
                            <p>18:00</p>
                            <p>18°</p>
                        </div>
                    </div>
                </div>
                <div className="daily-forecast">
                    <h3>5-day forecast</h3>
                    <div className="forecast-row">
                        <div className="forecast-item">
                            <p>Today</p>
                            <p>18°</p>
                        </div>
                        <div className="forecast-item">
                            <p>Saturday</p>
                            <p>18°</p>
                        </div>
                        <div className="forecast-item">
                            <p>Sunday</p>
                            <p>18°</p>
                        </div>
                        <div className="forecast-item">
                            <p>Monday</p>
                            <p>18°</p>
                        </div>
                        <div className="forecast-item">
                            <p>Tuesday</p>
                            <p>18°</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <p>Data provided in part by Openweathermap</p>
            </footer>
        </div>
    )
}

