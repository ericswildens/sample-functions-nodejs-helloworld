function main(args) {
    let name = args.name || 'from_app_platform'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }

exports.main = main
