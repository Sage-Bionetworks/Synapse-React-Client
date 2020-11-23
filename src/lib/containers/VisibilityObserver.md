VisibilityObserver uses the IntersectionObserver API to allow conditional child rendering and callbacks based on viewport visibility. It will render the renderOutOfView prop until it is scrolled into view, then will always render the renderInView prop instead. Callbacks will always be triggered on visibility changes.

```js { "props": { "data-description": "basic" } }
const renderInView = () => {
  return (
    <div style={{ backgroundColor: '#adedba', transition: 'background-color 1s' }}>
      In view
    </div>
  );
};

const renderOutOfView = (inView) => {
  return (
    <div style={{ backgroundColor: '#f98985', transition: 'background-color 1s' }}>
      Out of view
    </div>
  );
};


<VisibilityObserver
  renderInView={renderInView}
  renderOutOfView={renderOutOfView}
  onEnterView={console.log('scrolled into view')}
  onLeaveView={console.log('scrolled out of view')}
/>
```