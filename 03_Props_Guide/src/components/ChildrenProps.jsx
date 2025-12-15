function Card({children,title, color = "blue"}){
  // console.log(children);
  const colorClasses = {
    blue : 'border-blue-500 bg-blue-200',
    green : 'border-green-500 bg-green-100',
    purple : 'border-purple-500 bg-purple-100',
    red : 'border-red-500 bg-red-200'
  }
  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}>
      {title && <h3 className="text-xl font-bold mb-3 text-gray-600">{title}</h3>}
      <div className="text-gray-700">{children}</div>
    </div>
  )
}  

function Container({children, layout= 'vertical'}){
    const layoutClasses = {
      vertical: "flex flex-col space-y-4",
      horizontal: "flex flex-wrap gap-4",
      grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
    }
    return (
      <div className={layoutClasses[layout]}>{children}</div>
    )
  }
  


const ChildrenProps = () => {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
       <h2 className="font-medium text-lg">Children prop</h2>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui minima quisquam corporis repellendus excepturi sequi a! Minima ullam quia molestiae.</p>
       <div className="space-y-6">
        <div>
          <h3>Card component with children </h3>
          <Container layout="grid">
            <Card title="User Profile" color="green">
              <p className="mb-2"> 
                <strong>Name : </strong>Thomash Shelby
              </p>
              <p className="mb-2"> 
                <strong>Email : </strong>shelby@shel.com
              </p>
              <p className="mb-2"> 
                <strong>Role : </strong>Developer
              </p>
            </Card>
            <Card title="Statics" color="red">
              <p className="mb-2"> 
                <strong>Name : </strong>Polly Gray
              </p>
              <p className="mb-2"> 
                <strong>Email : </strong>polly@shel.com
              </p>
              <p className="mb-2"> 
                <strong>Role : </strong>Speaker
              </p>
            </Card>
            <Card title="Statics" color="purple">
              <p className="mb-2"> 
                <strong>Name : </strong>Brock Lenser
              </p>
              <p className="mb-2"> 
                <strong>Email : </strong>brocklen@wwe.com
              </p>
              <p className="mb-2"> 
                <strong>Role : </strong>Fighter
              </p>
            </Card>
            <Card title="Statics" color="blue">
              <p className="mb-2"> 
                <strong>Name : </strong>Christofer Nolan
              </p>
              <p className="mb-2"> 
                <strong>Email : </strong>nolan@shel.com
              </p>
              <p className="mb-2"> 
                <strong>Role : </strong>Actor
              </p>
            </Card>
          </Container>
        </div>
       </div>
    </section>
  )
}

export default ChildrenProps
