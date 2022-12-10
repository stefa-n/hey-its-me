import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'
import Script from 'next/script'

import Button from '/components/Button'

export default function Home() {
    return (
        <div>
            <Head>
                <title>hey it's me!</title>
                <meta name="description" content="http://github.com/stefa-n/hey-its-me"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Script src="https://kit.fontawesome.com/0fe3160666.js" crossorigin="anonymous"/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute'}}>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '3vw'}}>
                        <div style={{
                            width: '80vw',
                            height: '40rem',
                            background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
                            borderRadius: '5px'
                        }}>
                            <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
                                <Image src="/pfp.png" style={{borderRadius: '5px'}} width={80} height={80}/>
                            </div>
                            <h1 style={{textAlign: 'center'}}>hey, it's me!</h1>
                            <p style={{textAlign: 'center', margin: '0 0 0 0'}}>i mean it. it's the project name</p>

                            <br/>

                            <Button fontawesome='fa-brands fa-github' username='stefa-n' url='https://github.com/stefa-n'/>
                            <Button fontawesome='fa-brands fa-github' username='superstashed' url='https://github.com/superstashed'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
