import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './Configparticle/particle-config';

export default function Particlebackground(){
    return(
        <Particles params={particlesConfig}></Particles>
    )
}