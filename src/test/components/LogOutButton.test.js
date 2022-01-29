import LogOutButton from "../../main/components/LogOutButton/LogOutButton";
import TestRenderer from 'react-test-renderer';
import * as ReactRedux from 'react-redux';

describe("Logout Button", () => {
    it("sets class name to given className prop", () => {
        // GIVEN:
        let logoutFn = jest.fn();
        jest.spyOn(ReactRedux, 'useDispatch').mockImplementationOnce(() => logoutFn);

        // WHEN:
        const testRenderer = TestRenderer.create(<LogOutButton />);
        const logOutButton = testRenderer.root;
        logOutButton.findByType('button').props.onClick();

        // THEN:
        expect(logoutFn).toBeCalledTimes(1);
        expect(logoutFn).toBeCalledWith({ type: 'LOGOUT' });
    });
});
