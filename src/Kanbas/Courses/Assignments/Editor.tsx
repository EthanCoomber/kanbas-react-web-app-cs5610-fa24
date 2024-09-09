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
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <input id="wd-group" value={100} />
          </td>
        </tr>
        <br />
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
        <br />
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
        <br />
        <tr>
          <td align="left" valign="top"></td>
          <td>
            <label htmlFor="wd-submission-type">Online Entry Options</label>
            <br />
            <input type="checkbox" name="text-entry" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />

            <input type="checkbox" name="website-url" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />

            <input type="checkbox" name="media-recordings" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />

            <input type="checkbox" name="student-annotation" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />

            <input type="checkbox" name="file-upload" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" value={'Everyone'} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" id="wd-due-date" value="2024-05-13" />
            <br />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            {/* <label htmlFor="wd-available-from">Available from</label> */}
          </td>
          <td>
            <label htmlFor="wd-available-from">Available from</label>
            <br />
            <input type="date" id="wd-available-from" value="2024-05-13" />
            <br />
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input type="date" id="wd-available-until" value="2024-05-13" />
            <br />
          </td>
        </tr>
      </table>
    </div>
  );
}
