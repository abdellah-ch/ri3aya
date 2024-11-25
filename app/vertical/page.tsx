'use client';

import React, { useState } from 'react';
import { LuHeartHandshake } from "react-icons/lu";
import { FaBookOpen } from "react-icons/fa";

const Page: React.FC = () => {
    const [selectedCareType, setSelectedCareType] = useState<string>('');

    const handleSelection = (value: string) => {
        setSelectedCareType(value);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-background rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">De quel type de soin avez-vous besoin ?</h2>
            <p className="text-muted-foreground mb-6">Rejoindre Riaayati vous donne accès à des prestataires de soins pour toute la famille.</p>
            <form>
                {[
                    { label: 'Soins aux personnes âgées', value: 'senior-care' },
                    { label: 'cours suplementaire', value: 'housekeeping' },
                ].map((careOption) => (
                    <label
                        key={careOption.value}
                        className="block mb-2"
                    >
                        <input
                            type="radio"
                            name="care-type"
                            value={careOption.value}
                            className="hidden"
                            checked={selectedCareType === careOption.value}
                            onChange={() => handleSelection(careOption.value)}
                        />
                        <span
                            className={`flex space-x-2 p-4 border rounded-lg cursor-pointer ${selectedCareType === careOption.value
                                ? 'border-blue-500 bg-blue-100'
                                : 'border-black'
                                }`}
                        >
                            {
                                careOption.label === "Soins aux personnes âgées" ?
                                    <LuHeartHandshake className='text-2xl mr-4 text-blue-400' /> :
                                    <FaBookOpen className='text-2xl mr-4 text-blue-400' />
                            }
                            {careOption.label}
                        </span>
                    </label>
                ))}

                <button
                    className="mt-4 w-full bg-[#EF5844] text-white p-2 rounded-full hover:bg-accent/80"
                    onClick={(e) => e.preventDefault()}
                >
                    Suivant
                </button>
            </form>
        </div>
    );
};

export default Page;
