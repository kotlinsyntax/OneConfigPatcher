function loadOC() {
    let File = Java.type("java.io.File");
    let path = new File("OneConfig\\OneConfig (1.8.9-forge).jar").toURI().toURL();
    let URLLoader = Java.type("java.net.URLClassLoader");
    let URL = Java.type("java.net.URL");
    let CL = Java.type("java.lang.ClassLoader");
    let urlcls = (URLLoader) CL.getSystemClassLoader();
    let mthd = urlcls.class.getDeclaredMethod("addURL", URL.class);
    mthd.setAccessible(true);
    mthd.invoke(CL.getSystemClassLoader(), path);
}

register("gameLoad", () => {
    loadOC();
});

register("command", () => {
    loadOC();
}).setName("rocl")
