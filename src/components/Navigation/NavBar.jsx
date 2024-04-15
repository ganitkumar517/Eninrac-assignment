import React from 'react'

export default function NavBar() {

    const languages = [
        {
            "value": "English",
            "label": "English"
        },
        {
            "value": "Spanish",
            "label": "Spanish"
        },
        {
            "value": "French",
            "label": "French"
        },
        {
            "value": "German",
            "label": "German"
        },
        {
            "value": "Chinese",
            "label": "Chinese"
        },
        {
            "value": "Japanese",
            "label": "Japanese"
        }
    ]
    return (
        <section>
            <nav>
                <div className="flex justify-center">
                    <a href="#destination" className="px-4 py-2">Destination</a>
                    <a href="#hotels" className="px-4 py-2">Hotels</a>
                    <a href="#flights" className="px-4 py-2">Flights</a>
                    <a href="#booking" className="px-4 py-2">Bookings</a>
                    <a href="#login" className="px-4 py-2">Login</a>
                    <a href="#signUp" className="px-4 py-2 border border-black rounded-lg">Sign Up</a>
                    <select
                        className="px-4 py-2 cursor-pointer outline-none bg-transparent"
                        title="Select Language"
                    >
                        {languages.map((lang, index) => (
                            <option key={index} value={lang.value}>
                                {lang.label}
                            </option>
                        ))}
                    </select>
                </div>
            </nav>
        </section>
    )
}
