# CloudParty.it website
[cloudparty.it](http://cloudparty.it) are a series of dev events.
Powerd by [Corley s.r.l](http://corley.it) & [CloudConf](http://cloudconf.it)

## Install
```bash
git clone git@github.com:corley/cloudparty.it
cd cloudparty.it
```
### Dev mode
```bash
npm install
```
```src``` is source of site, you can edit here your files and dev server.

### Grunt
```bash
cp configuration.json.dist configuration.json
```
In this file you can manage aws credential for deploy in S3

* ``` grunt copy ``` create ```build```, your production
* ``` grunt deploy ``` pull your build in S3 bucket
