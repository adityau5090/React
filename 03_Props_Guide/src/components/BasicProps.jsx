import { useState } from "react"

function Button({text,color,size, onClick, disabled}){
    return (
        <button
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-2 rounded-lg font-medium transition-all duration-300
        ${size === 'small' ? 'text-sm px-3 py-1' : ''}
        ${size === 'large' ? 'text-lg px-14 py-4' : ''}
        ${color === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' : ''}
        ${color === 'secondary' ? 'bg-gray-500 hover:bg-gray-600 text-white ' : ''}
        ${color === 'danger' ? 'bg-red-500 hover:bg-red-600 text-black' : ''}
        ${color === 'success' ? 'bg-green-500 hover:bg-green-600 text-black' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}>
            {text}
        </button>
    )
}
const BasicProps = () => {
    const [clickCount, setClickCount] = useState(0)
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
        <h2 className="font-medium text-lg">Basic props</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere adipisci nobis deleniti rerum. Ut autem atque quos maxime, debitis, ducimus nobis asperiores reprehenderit voluptates veritatis magni sint, quaerat eligendi.</p>
        <div className="space-y-4">
            <h3>Different color {clickCount} </h3>
            <div  className="flex flex-wrap gap-3">
                <Button 
                text="Primary button"
                color="primary"
                onClick={() => setClickCount(clickCount + 1)} 
                />
                <Button 
                text="Secondary button"
                color="secondary"
                onClick={() => setClickCount(clickCount + 1)} 
                />
                <Button 
                text="Danger button"
                color="danger"
                onClick={() => setClickCount(clickCount + 1)} 
                />
                <Button 
                text="Success button"
                color="success"
                onClick={() => setClickCount(clickCount + 1)} 
                />
            </div>
        </div>
        <div className="space-y-4">
            <h3>Different sizes {clickCount} </h3>
            <div  className="flex flex-wrap gap-3">
                <Button 
                text="Small"
                color="primary"
                size="small"
                onClick={() => setClickCount(clickCount + 1)} 
                />
                <Button 
                text="Large"
                color="secondary"
                size="large"
                onClick={() => setClickCount(clickCount + 1)} 
                />
                <Button 
                text="Disabled"
                color="danger"
                disabled="true"
                onClick={() => setClickCount(clickCount + 1)} 
                />
                <Button 
                text="Success button"
                color="success"
                onClick={() => setClickCount(clickCount + 1)} 
                />
            </div>
        </div>
    </section>
  )
}

export default BasicProps
