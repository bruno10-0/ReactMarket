
export const MapAndDetails = () => {
  return (
    <div>
      <div className="mt-20 py-0 md:py-10 w-full h-screen flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-2/3 h-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1289.4155247620245!2d-55.89699631004696!3d-27.36964968737681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1707783872795!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        <div className="w-full md:w-1/4 h-full bg-base-100 flex flex-col gap-5 p-5 md:p-10">
          <h1 className="uppercase font-semibold" style={{letterSpacing:"5px"}}>localización</h1>
          <h2 className="uppercase" style={{letterSpacing:"2px"}}>ReactMarket</h2>
          <h3>Esquina Junín, Entre Ríos 1234</h3>
          <a className="font-light uppercase btn bg-primary text-base-100 rounded-badge mt-10" href="https://www.google.com/maps/@-27.3693929,-55.8978413,20.25z?entry=ttu" target="_blank" rel="noopener noreferrer" >Ver en Maps</a>
        </div>
      </div>
    </div>
  )
}
