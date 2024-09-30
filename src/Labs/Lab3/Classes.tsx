import './Classes.css';
export default function Classes() {
  const color = 'blue';
  const dangerous = true;
  const colorBlack = { color: 'black' };
  const padding10px = { padding: '10px' };
  const bgBlue = { backgroundColor: 'lightblue', color: 'black', ...padding10px };
  const bgRed = {
    backgroundColor: 'lightcoral',
    ...colorBlack,
    ...padding10px,
  };

  return (
    <div>
      <h2>Classes</h2>
      <div className="wd-bg-yellow wd-fg-black wd-padding-10px">Yellow background </div>
      <div className="wd-bg-blue wd-fg-black wd-padding-10px">Blue background </div>
      <div className="wd-bg-red wd-fg-black wd-padding-10px">Red background </div>
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>Dynamic Blue background</div>
      <div
        className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                     wd-fg-black wd-padding-10px`}
      >
        Dangerous background
      </div>
      <div style={{ backgroundColor: 'lightyellow', color: 'black', padding: '10px' }}>Yellow background</div>
      <div style={bgRed}> Red background </div>
      <div style={bgBlue}>Blue background</div>

      <hr />
    </div>
  );
}
