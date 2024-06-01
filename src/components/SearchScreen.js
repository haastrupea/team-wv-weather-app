import React from 'react';
import styles from './searchscreen.module.css';
import { CiSearch } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";
import { FaCloudversify } from 'react-icons/fa';

export default function SearchScreen() {
    const { form, input, search, info, smallHeading, cityBlock, cityName, countryName, degree, cityDegree, degreeIcon } = styles;

    return (
        <>
            <form className={form}>
                <input
                    type='text'
                    placeholder='Search'
                    className={input}
                />
                <CiSearch className={search} />
            </form>

            <div>
                <div className={info}>
                    <h2 className={smallHeading}>Major Cities</h2>
                    <GoChevronRight />
                </div>

                <div>
                    <div className={cityBlock}>
                        <div>
                            <h3 className={cityName}>Lagos</h3>
                            <span className={countryName}>
                                Nigeria
                            </span>
                        </div>
                        <div className={degree}>
                            <span className={cityDegree}>18</span>
                            <FaCloudversify className={degreeIcon} />
                        </div>
                    </div>
                    <div className={cityBlock}>
                        <div>
                            <h3 className={cityName}>New York</h3>
                            <span className={countryName}>United States of America</span>
                        </div>
                        <div className={degree}>
                            <span className={cityDegree}>
                                18
                            </span>
                            <FaCloudversify className={degreeIcon} />
                        </div>
                    </div>
                    <div className={cityBlock}>
                        <div>
                            <h3 className={cityName}>
                                Mumbai
                            </h3>
                            <span className={styles.countryName}>
                                India
                            </span>
                        </div>
                        <div className={degree}>
                            <span className={cityDegree}>
                                18
                            </span>
                            <FaCloudversify className={degreeIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
