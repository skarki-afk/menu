const Img =()=>{
  const style1 = {
    backgroundImage : "url('https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
  }
  return (
    <div style={style1} className={`h-screen w-screen bg-no-repeat bg-cover`}>
      <div className={`capitalize pt-48 px-12 md:px-28 text-3xl md:text-4xl`}>the best food</div>
      <div className={`capitalize pl-36 md:px-60 text-3xl md:text-4xl`}>in the valley.</div>
      <p className={`capitalize pt-64 text-white px-5 md:px-10 font-bold text-lg md:text-2xl text-center`}> 
        <i>
        free delivery around valley.(above rs.1500)
        </i>
      </p>

    </div>)
}

export default Img