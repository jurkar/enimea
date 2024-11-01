function bezier(params) {
    // Extract control points from params
    let [p0, p1, p2, p3] = params;

    // Calculate points on the Bezier curve
    return function(t) {
        let x = (1 - t) ** 3 * p0[0] + 3 * (1 - t) ** 2 * t * p1[0] + 3 * (1 - t) * t ** 2 * p2[0] + t ** 3 * p3[0];
        let y = (1 - t) ** 3 * p0[1] + 3 * (1 - t) ** 2 * t * p1[1] + 3 * (1 - t) * t ** 2 * p2[1] + t ** 3 * p3[1];
        return [x, y];
    };
}
