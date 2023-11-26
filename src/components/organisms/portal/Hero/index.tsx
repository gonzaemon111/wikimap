export const PortalHero = () => {
  return (
    <section
      className='hero py-32'
      style={{
        backgroundImage:
          'url(https://imagedelivery.net/_ZgxhjwzRQrsPvI8IazDLA/0e16b2d7-ec61-4094-52fc-fd4ed725ea00/public)',
      }}
    >
      {/* <div className='hero-overlay'></div> */}
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
          <p className='mb-5'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </section>
  );
};
