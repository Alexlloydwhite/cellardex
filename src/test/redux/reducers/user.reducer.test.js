import userReducer from "../../../main/redux/reducers/user.reducer";

describe("User Reducer", () => {
    it("Returns default state given unknown action type", () => {
        // GIVEN:
        const action = {
            type: ""
        };

        // WHEN:
        const userState = userReducer({}, action);

        // THEN:
        expect(userState).toStrictEqual({});
    });

    it("SET_USER returns the user object", () => {
        // GIVEN:
        const action = {
            type: "SET_USER",
            payload: "Alex"
        };

        // WHEN:
        const userState = userReducer({}, action);

        // THEN:
        expect(userState).toBe("Alex")
    });

    it("UNSET_USER returns an empty object", () => {
        // GIVEN: 
        const action = {
            type: "UNSET_USER",
        }

        // WHEN:
        const userState = userReducer({}, action);

        // THEN:
        expect(userState).toStrictEqual({});
    });
});
