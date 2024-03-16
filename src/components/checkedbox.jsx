export function Checkedbox ({checked, onChange}) {

    return <>
        <input
            type="checkbox"
            className=""
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        
        />
    
    </>
    
    
    }