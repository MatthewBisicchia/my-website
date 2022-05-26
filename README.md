# Monorepo for Matthew Bisicchia's AWS-hosted Node Projects (Personal Website and BioLab)


**# FAQ:**

**Why is BioLab included in this repo as well?**

BioLab is included in this repository for cost-saving purposes: one CI/CD pipeline automates builds to one Elastic Beanstalk application, instead of needing separate cloud infrastructure for both applications. In the event that BioLab needs the separate infrastructure and reside on its own domain, then it will certainly be moved.

**Why is the number of commits for this repository include roughly 55 commits committed on May 26, 2022 by Matthew Bisicchia <matthewbisicchia@gmail.com> that are copies of Matthew Bisicchia's previous commits from throughout January - May?**

During the January - May timeframe, Matthew's local repository did not have the email matthewbisicchia@gmail.com in the git config settings. Therefore, these commits were not included in Matthew's GitHub contributions graph. To address this, a git rebase went through previous commits and edited them in order to add the <matthewbisicchia@gmail.com> email. In order to maintain best git version control principles/practices, these edits are considered additional commits on May 26th, 2022. It is important to note, however, that these commits are not double counted in Matthew's GitHub contributions graph. As can be seen in my-website's commit history, only the commits with Matthew's profile next to it are counted in Matthew's GitHub contributions graph. All of the commits throughout January - May, although with name Matthew Bisicchia, did not have <matthewbisicchia@gmail.com> associated with them (and hence do not have Matthew's profile picture associated with them). Therefore, those original commmits are not included in Matthew's contribution graph, but the commits as a result of the rebase are. 
