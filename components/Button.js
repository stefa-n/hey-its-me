import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'
import Script from 'next/script'

export default function Button({fontawesome, username, url}) {
    return (
        <div>
            <Link href={url}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{
                        width: '60vw',
                        height: '50px',

                        backgroundColor: '#262826',
                        borderRadius: '5px',

                        display: 'flex',
                        flexDirection: 'row',

                        alignItems: 'center',

                        marginTop: '2rem'
                    }}>
                        <i style={{width: '20%', textAlign: 'center'}} className={fontawesome}/>
                        <h2 style={{width: '60%', textAlign: 'center'}}>{username}</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}
