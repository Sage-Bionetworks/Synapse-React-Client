import * as React from 'react'

interface DataDebugProps {
    formSchema: any;
    formData: any;
    hidden: boolean;
}

export default function DataDebug(props: DataDebugProps) {
    const myData = <div>

    <h6>Data</h6>
    <pre>{JSON.stringify(props.formData, null, 2)}</pre>
    <h6>Schema</h6>
    <pre>{/*JSON.stringify(props.formSchema, null, 2)*/}</pre>
    </div>
    return (<>{!props.hidden &&  myData}</>)

}