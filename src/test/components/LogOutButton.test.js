import LogOutButton from "../../main/components/LogOutButton/LogOutButton";
import renderer from 'react-test-renderer';

describe("Logout Button", () => {
    it("sets class name to given className prop", () => {
        // GIVEN:
        const props = {
            className: 'logoutButton'
        };
        const dispatch = jest.fn();

        // WHEN:
        const component = renderer.create(
            <LogOutButton {...props} />
        );
        const tree = component.toJSON();

        // THEN:
        expect(tree).toMatchSnapshot();
    });
});
