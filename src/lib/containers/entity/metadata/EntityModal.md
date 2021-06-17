Simple schema:
syn25741218 (valid)
syn25741219 (invalid)


Complex schema
syn23555348 (valid)
syn23555349 (invalid)

```jsx
const [isOpen, setIsOpen] = React.useState(false);

<div className="bootstrap-4-backport">
    <button className="btn btn-default" onClick={() => setIsOpen(true)} >Open project</button>
    {isOpen && <EntityModal show={isOpen} onClose={() => setIsOpen(false)} initialTab={"ANNOTATIONS"} accessToken={accessToken} entityId={"syn23567475"}/>}
</div>
```

```jsx
const [isOpen, setIsOpen] = React.useState(false);

<div className="bootstrap-4-backport">
    <button className="btn btn-default" onClick={() => setIsOpen(true)} >Open folder</button>
    {isOpen && <EntityModal show={isOpen} onClose={() => setIsOpen(false)} initialTab={"ANNOTATIONS"} accessToken={accessToken} entityId={"syn24183903"}/>}
</div>
```

```jsx
const [isOpen, setIsOpen] = React.useState(false);

<div className="bootstrap-4-backport">
    <button className="btn btn-default" onClick={() => setIsOpen(true)} >Open file entity with no annotations or schema</button>
    {isOpen && <EntityModal show={isOpen} onClose={() => setIsOpen(false)} initialTab={"ANNOTATIONS"} accessToken={accessToken} entityId={"syn25830585"}/>}
</div>
```


```jsx
const [isOpen, setIsOpen] = React.useState(false);

<div className="bootstrap-4-backport">
    <button className="btn btn-default" onClick={() => setIsOpen(true)} >Open entity with simple schema (valid)</button>
    {isOpen && <EntityModal show={isOpen} onClose={() => setIsOpen(false)} initialTab={"ANNOTATIONS"} accessToken={accessToken} entityId={"syn25741218"}/>}
</div>
```

```jsx
const [isOpen, setIsOpen] = React.useState(false);

<div className="bootstrap-4-backport">
    <button className="btn btn-default" onClick={() => setIsOpen(true)} >Open entity with simple schema (invalid)</button>
    {isOpen && <EntityModal show={isOpen} onClose={() => setIsOpen(false)} initialTab={"ANNOTATIONS"} accessToken={accessToken} entityId={"syn25741219"}/>}
</div>
```

```jsx
const [isOpen, setIsOpen] = React.useState(false);

<div className="bootstrap-4-backport">
    <button className="btn btn-default" onClick={() => setIsOpen(true)} >Open entity with complex schema (valid)</button>
    {isOpen && <EntityModal show={isOpen} onClose={() => setIsOpen(false)} initialTab={"ANNOTATIONS"} accessToken={accessToken} entityId={"syn23555348"}/>}
</div>
```

```jsx
const [isOpen, setIsOpen] = React.useState(false);

<div className="bootstrap-4-backport">
    <button className="btn btn-default" onClick={() => setIsOpen(true)} >Open entity with complex schema (invalid)</button>
    {isOpen && <EntityModal show={isOpen} onClose={() => setIsOpen(false)} initialTab={"ANNOTATIONS"} accessToken={accessToken} entityId={"syn23555349"}/>}
</div>
```
