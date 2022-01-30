import LogOutButton from "../../main/components/LogOutButton/LogOutButton";
import { create } from 'react-test-renderer';
import * as ReactRedux from 'react-redux';

describe("Logout Button", () => {
    it("renders as expected", () => {
        // GIVEN:
        const props = {
            className: 'someClassName'
        }
        const logoutFn = jest.fn();
        jest.spyOn(ReactRedux, 'useDispatch').mockImplementationOnce(() => logoutFn);


        // WHEN:
        const logOutButton = create(<LogOutButton {...props} />).root;
        const button = logOutButton.findByType('button');

        // THEN:
        expect(button.props.className.includes('someClassName')).toBe(true);
        expect(button.props.children).toEqual('Log Out')
    });

    it("logout button calls dispatch to logout", () => {
        // GIVEN:
        const logoutFn = jest.fn();
        jest.spyOn(ReactRedux, 'useDispatch').mockImplementationOnce(() => logoutFn);

        // WHEN:
        const logOutButton = create(<LogOutButton />).root;
        logOutButton.findByType('button').props.onClick();

        // THEN:
        expect(logoutFn).toBeCalledTimes(1);
        expect(logoutFn).toBeCalledWith({ type: 'LOGOUT' });
    });
});
