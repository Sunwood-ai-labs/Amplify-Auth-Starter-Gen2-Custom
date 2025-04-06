import { App, Stack } from 'aws-cdk-lib';
import * as wafv2 from 'aws-cdk-lib/aws-wafv2';
import { Construct } from 'constructs';

class SecurityStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // IPセットの作成
    const allowedIPs = new wafv2.CfnIPSet(this, 'AllowedIPs', {
      addresses: [
        '122.132.45.194/32',
        '193.148.16.126/32',
        '122.135.202.17/32',
        '93.118.41.105/32',
        '54.92.45.126/32',
        '35.79.202.92/32',
        '57.180.80.237/32',
        '52.195.98.19/32'
      ],
      ipAddressVersion: 'IPV4',
      scope: 'REGIONAL',
      description: 'Allowed IP addresses for the application',
      name: 'allowed-ips'
    });

    // Web ACLの作成
    const webAcl = new wafv2.CfnWebACL(this, 'WebACL', {
      defaultAction: { block: {} },
      scope: 'REGIONAL',
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        metricName: 'WebACLMetrics',
        sampledRequestsEnabled: true
      },
      rules: [
        {
          name: 'AllowFromIPSet',
          priority: 1,
          statement: {
            ipSetReferenceStatement: {
              arn: allowedIPs.attrArn
            }
          },
          visibilityConfig: {
            cloudWatchMetricsEnabled: true,
            metricName: 'AllowFromIPSetRule',
            sampledRequestsEnabled: true
          },
          action: { allow: {} }
        }
      ]
    });
  }
}

const app = new App();
new SecurityStack(app, 'AmplifySecurityStack');
app.synth();
