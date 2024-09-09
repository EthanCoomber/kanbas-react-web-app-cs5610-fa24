export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">The assignment is available online Submit a link to the landing page of</textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <input id="wd-group" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Assignment Group</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Assignments">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Assignments">Percentage</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Online Entry Options</label>
            <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
            <label htmlFor="wd-chkbox-comedy">Text Entry</label>
            <br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
            <label htmlFor="wd-chkbox-drama">Website URL</label>
            <br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
            <label htmlFor="wd-chkbox-scifi">Media Recordings</label>
            <br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
            <label htmlFor="wd-chkbox-fantasy">Student Annotation</label>
            <br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
            <label htmlFor="wd-chkbox-fantasy">File Uploads</label>
          </td>
          {/* <td>
            <input id="wd-submission-type" value={100} />
          </td> */}
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input id="wd-due-date" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input id="wd-available-from" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input id="wd-available-until" value={100} />
          </td>
        </tr>
        {/* Complete on your own */}
      </table>
    </div>
  );
}
