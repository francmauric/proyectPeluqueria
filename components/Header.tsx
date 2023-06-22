import React from 'react';
import NavBar from './NavBar';
import NavBarmobile from './NavBarmobile';

export default function Example() {
      const links = [
          { name: 'Open roles', href: '#' },
          { name: 'Internship program', href: '#' },
          { name: 'Our values', href: '#' },
          { name: 'Meet our leadership', href: '#' },
        ]
        const stats = [
          { name: 'Cortes', value: '+200 valoraciones' },
          { name: 'Tratamientos', value: '+200 valoraciones' },
          { name: 'Alisados', value: '+200 valoraciones' },
          { name: 'Mechas - Color', value: '+100 valoraciones' },
        ]


    return (
      <div className="relative isolate overflow-hidden bg-gray-900 pb-24 sm:pb-32">
        <NavBarmobile />
        <NavBar />
        <img
          src="/images/peluqueria-bo-4.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight py-10 text-white sm:text-6xl">Peluqueria How 'U want</h2>
            
          </div>
          <div className="mx-auto mt-10 max-w-2xl h-48 lg:mx-0 lg:max-w-none">
            
            <dl className="mt-16 grid grid-cols-1  gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="leading-7 text-gray-300 text-2xl">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }