import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
            <Dashboard />
          </td>
        </tr>
      </table>
    </div>
  );
}
